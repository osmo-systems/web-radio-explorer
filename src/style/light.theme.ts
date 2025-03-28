export const lightTheme: Theme = {
	name: "Light",
	symbol: "☀️",
	colors: {
		strong: {
			type: "hsla",
			hue: 210,
			saturation: 80,
			lightness: 45,
			alpha: 1
		},
		accent: {
			type: "hsla",
			hue: 210,
			saturation: 70,
			lightness: 60,
			alpha: 1
		},
		hover: {
			type: "hsla",
			hue: 210,
			saturation: 70,
			lightness: 55,
			alpha: 1
		},
		active: {
			type: "hsla",
			hue: 210,
			saturation: 80,
			lightness: 50,
			alpha: 1
		},
		background: {
			soft: {
				type: "hsla",
				hue: 210,
				saturation: 20,
				lightness: 98,
				alpha: 1
			},
			hard: {
				type: "hsla",
				hue: 0,
				saturation: 0,
				lightness: 100,
				alpha: 1
			}
		},
		text: {
			soft: {
				type: "hsla",
				hue: 210,
				saturation: 15,
				lightness: 45,
				alpha: 1
			},
			hard: {
				type: "hsla",
				hue: 210,
				saturation: 10,
				lightness: 20,
				alpha: 1
			},
			inverse: {
				type: "hsla",
				hue: 0,
				saturation: 0,
				lightness: 100,
				alpha: 1
			}
		},
		tags: {
			text: {
				type: "hsla",
				hue: 210,
				saturation: 80,
				lightness: 35,
				alpha: 1
			},
			bg: {
				type: "hsla",
				hue: 210,
				saturation: 80,
				lightness: 95,
				alpha: 1
			},
			border: {
				type: "hsla",
				hue: 210,
				saturation: 70,
				lightness: 85,
				alpha: 1
			}
		},
		state: {
			error: {
				text: {
					type: "hsla",
					hue: 0,
					saturation: 80,
					lightness: 45,
					alpha: 1
				},
				bg: {
					type: "hsla",
					hue: 0,
					saturation: 80,
					lightness: 95,
					alpha: 1
				}
			},
			online: {
				text: {
					type: "hsla",
					hue: 120,
					saturation: 60,
					lightness: 30,
					alpha: 1
				},
				bg: {
					type: "hsla",
					hue: 120,
					saturation: 60,
					lightness: 95,
					alpha: 1
				}
			},
			loading: {
				text: {
					type: "hsla",
					hue: 210,
					saturation: 80,
					lightness: 45,
					alpha: 1
				},
				bg: {
					type: "hsla",
					hue: 210,
					saturation: 80,
					lightness: 95,
					alpha: 1
				}
			}
		},
		action: {
			playing: {
				text: {
					type: "hsla",
					hue: 160,
					saturation: 70,
					lightness: 30,
					alpha: 1
				},
				bg: {
					type: "hsla",
					hue: 160,
					saturation: 70,
					lightness: 95,
					alpha: 1
				}
			},
			paused: {
				text: {
					type: "hsla",
					hue: 40,
					saturation: 90,
					lightness: 40,
					alpha: 1
				},
				bg: {
					type: "hsla",
					hue: 40,
					saturation: 90,
					lightness: 95,
					alpha: 1
				}
			},
			retry: {
				text: {
					type: "hsla",
					hue: 0,
					saturation: 70,
					lightness: 45,
					alpha: 1
				},
				bg: {
					type: "hsla",
					hue: 0,
					saturation: 70,
					lightness: 95,
					alpha: 1
				}
			}
		}
	},
	typography: {
		primaryFont: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
		secondaryFont: "Georgia, serif"
	},
	borderRadius: {
		input: "4px",
		general: "8px"
	},
	cardBoxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
}
