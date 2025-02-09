import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/RestaurantMenuMock.json";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>,
    ),
  );
    const AccoridanHeader = screen.getByText("Flat Menu @189 (32)");
    fireEvent.click(AccoridanHeader);
    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems).toHaveLength(32);
    expect(screen.getByText("Cart (0)")).toBeInTheDocument();
    const addbtns = screen.getAllByRole("button", { name: "ADD" });
    fireEvent.click(addbtns[0]);
    expect(screen.getByText("Cart (1)")).toBeInTheDocument();
    fireEvent.click(addbtns[1]);
    expect(screen.getByText("Cart (2)")).toBeInTheDocument();
    expect(screen.getAllByTestId("foodItems").length).toBe(34);
    fireEvent.click(screen.getByRole("button",{name: "Clear Cart"}));
    expect(screen.getAllByTestId("foodItems").length).toBe(32);
    expect(screen.getByText("Feeling Hungry!! Order Something Now!!")).toBeInTheDocument();
});
