import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";
import { HeaderBar } from "./index";

describe("HeaderBar Tests", () => {
  const headerButton = {
    onPress: jest.fn(),
    icon: "menu",
  };

  it("should render correctly with default props", () => {
    const { getByTestId } = render(<HeaderBar />);
    const headerContainer = getByTestId("header-container");
    const headerTitle = getByTestId("header-title");
    expect(headerContainer).toBeDefined();
    expect(headerTitle).toBeDefined();
  });

  it("should render correctly with title", () => {
    const { getByTestId } = render(<HeaderBar title="Home" />);
    const headerTitle = getByTestId("header-title");
    expect(headerTitle.props.children).toBe("Home");
  });

  it("should render correctly with left button", () => {
    const { getByTestId } = render(<HeaderBar leftButton={headerButton} />);
    const headerLeftButton = getByTestId("header-left-button");
    fireEvent.press(headerLeftButton);
    expect(headerButton.onPress).toHaveBeenCalled();
    expect(headerLeftButton).toBeDefined();
  });

  it("should render correctly with right button", () => {
    const { getByTestId } = render(<HeaderBar rightButton={headerButton} />);
    const headerRightButton = getByTestId("header-right-button");
    fireEvent.press(headerRightButton);
    expect(headerButton.onPress).toHaveBeenCalled();
    expect(headerRightButton).toBeDefined();
  });

  it("should render correctly with background color", () => {
    const { getByTestId } = render(
      <HeaderBar backgroundColor="red" title="Home" />
    );
    const headerContainer = getByTestId("header-container");
    expect(headerContainer.props.style[1].backgroundColor).toBe("red");
  });
});
