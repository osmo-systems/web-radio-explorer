import { useContext } from "react"
import { FavoritesContext } from "../contexts/FavoritesContext.tsx"

export const useFavorites = () => {
	const context = useContext(FavoritesContext)
	if (context === undefined) {
		throw new Error("useFavorites must be used within a FavoritesProvider")
	}
	return context
}
