import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestaurantList.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should search resList for burger text input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>,
      ),
    );
    const CardsBefore = screen.getAllByTestId("resCard");
    expect(CardsBefore.length).toBe(20);

    const Searchbtn = screen.getByRole("button", {name: "Search"})
    const Searchinput = screen.getByTestId("searchInput");
    fireEvent.change(Searchinput,{ target: {value : "pizza"}});
    fireEvent.click(Searchbtn); 
    
    const CardsAfter = screen.getAllByTestId("resCard");
    expect(CardsAfter.length).toBe(2);
});

it("Should test the top rated filter button", async() => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>,
      ),
    );
    const TopRatedBtn = screen.getByRole("button", {
      name: "Top Rated Restaurant",
    });
    fireEvent.click(TopRatedBtn); //simulating the click event of the button.   
    const Cards = screen.getAllByTestId("resCard");
    expect(Cards.length).toBe(16);
})