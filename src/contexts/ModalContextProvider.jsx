import ModalContext from "./ModalContext.jsx";
import {useState} from "react";

const SettingsContextProvider = ({ children }) => {
    const [isModalOpened, setIsModalOpened] = useState(false);

    return (
        <ModalContext.Provider value={{
            isModalOpened,
            setIsModalOpened,
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export default SettingsContextProvider;