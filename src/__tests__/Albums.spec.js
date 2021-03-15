import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils'
import Albums from '../components/Albums';
import { BrowserRouter as Router } from 'react-router-dom';

describe ('<Albums />', () => {
    let container = null;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });
    
    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it("renders album api data", async () => {
        const fakeAlbum = [{
            album_name: "Hello Hurricane",
            band_name: "Switchfoot",
        }];
        jest.spyOn(global, "fetch").mockImplementation(() => 
            Promise.resolve({
                json: () => Promise.resolve(fakeAlbum)
            })
        );

        await act(async () => {
            render(<Router><Albums /></Router>, container);
        });

        expect(container.textContent).toContain(`${fakeAlbum[0].album_name} - ${fakeAlbum[0].band_name}`);

        global.fetch.mockRestore();
    })
})