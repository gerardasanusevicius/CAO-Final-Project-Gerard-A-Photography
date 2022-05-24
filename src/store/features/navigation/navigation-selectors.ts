import { RootState } from "../../types";

export const selectRedirect = (state: RootState) => state.navigation.redirect;
