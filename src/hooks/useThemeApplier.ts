import {useCallback, useEffect, useState} from "react";
import {GradientColor, gradientToString, hslaToString, Theme, themes} from "../style/themes.ts";
import {ThemeContextType} from "../contexts/ThemeContext.tsx";

/**
 * Applies the provided theme to the application
 * @param theme The theme to apply
 * @param targetElement Optional target element (defaults to document.documentElement)
 */
export const applyTheme = (theme: Theme, targetElement: HTMLElement = document.documentElement): void => {
    const cssVars: Record<string, string> = {
        // Backgrounds
        '--color-bg-main': theme.colorBgMain.type === 'solid'
            ? theme.colorBgMain.color
            : gradientToString(theme.colorBgMain as GradientColor),
        '--color-bg-panel': theme.colorBgPanel.type === 'solid'
            ? theme.colorBgPanel.color
            : gradientToString(theme.colorBgPanel as GradientColor),

        // Visualizer colors
        '--bar-hue-start': hslaToString(theme.barHueStart),
        '--bar-hue-end': hslaToString(theme.barHueEnd),

        // Input backgrounds
        '--color-bg-input': hslaToString(theme.colorBgInput),
        '--color-bg-input-focus': hslaToString(theme.colorBgInputFocus),

        // Item backgrounds
        '--color-bg-item': hslaToString(theme.colorBgItem),
        '--color-bg-item-hover': hslaToString(theme.colorBgItemHover),

        // Text colors
        '--color-text-primary': theme.colorTextPrimary,
        '--color-text-secondary': theme.colorTextSecondary,
        '--color-text-tertiary': theme.colorTextTertiary,
        '--color-text-inverse': theme.colorTextInverse,
        '--color-text-header-primary': theme.colorTextHeaderPrimary,

        // Border styles
        '--border-radius': `${theme.borderRadius}px`,
        '--border-color': theme.borderColor,
        '--border': theme.border,

        // Effects
        '--text-shadow': theme.textShadow,
        '--box-shadow': theme.boxShadow,

        // Fonts
        '--font-primary': theme.fontPrimary,
        '--font-secondary': theme.fontSecondary,

        // Button styles
        '--color-button-bg': theme.colorButtonBg.type === 'solid'
            ? theme.colorButtonBg.color
            : gradientToString(theme.colorButtonBg as GradientColor),
        '--color-button-bg-hover': theme.colorButtonBgHover.type === 'solid'
            ? theme.colorButtonBgHover.color
            : gradientToString(theme.colorButtonBgHover as GradientColor),

        // Tag styles
        '--color-tag-bg': hslaToString(theme.colorTagBg),
        '--color-tag-text': theme.colorTagText,

        // Play button colors
        '--color-text-play-button-play': theme.colorTextPlayButtonPlay,
        '--color-text-play-button-pause': theme.colorTextPlayButtonPause,
        '--color-text-play-button-retry': theme.colorTextPlayButtonRetry,
        '--color-play-button-play': theme.colorPlayButtonPlay,
        '--color-play-button-pause': theme.colorPlayButtonPause,
        '--color-play-button-retry': theme.colorPlayButtonRetry,

        // Status colors
        '--color-bg-online': hslaToString(theme.colorBgOnline),
        '--color-bg-loading': theme.colorBgLoading,
        '--color-bg-pause': theme.colorBgPause,
        '--color-bg-error': hslaToString(theme.colorBgError),

        // Theme name (for potential debugging/reference)
        '--theme-name': theme.name
    };

    // Apply CSS variables to the target element
    Object.entries(cssVars).forEach(([property, value]) => {
        targetElement.style.setProperty(property, value);
    });

    // Optionally add a data attribute to indicate the current theme
    targetElement.dataset.theme = theme.name;
};

/**
 * A custom hook that applies the theme and returns functions to change themes
 * @param initialTheme The initial theme to apply
 * @returns ThemeContextType object
 */
export const useThemeApplier = (initialTheme: string = 'dark'): ThemeContextType => {
    const [currentTheme, setCurrentTheme] = useState<string>(initialTheme);

    // Apply theme whenever it changes
    useEffect(() => {
        // @ts-ignore
        const theme = themes[currentTheme] || themes.dark;
        applyTheme(theme);
    }, [currentTheme]);

    const setTheme = useCallback((themeName: string) => {
        // @ts-ignore
        if (themes[themeName]) {
            setCurrentTheme(themeName);
        } else {
            console.warn(`Theme "${themeName}" not found, using default`);
            setCurrentTheme('dark');
        }
    }, []);

    // New nextTheme function to cycle to the next theme
    const switchToNextTheme = useCallback(() => {
        setCurrentTheme(getNextTheme());
    }, [currentTheme]);

    const getNextTheme = useCallback(()=>{
        const themeNames = Object.keys(themes);
        const currentIndex = themeNames.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themeNames.length;
        return themeNames[nextIndex]
    }, [currentTheme]);


    return {
        // @ts-ignore
        theme: themes[currentTheme] || themes.dark,
        setTheme,
        switchToNextTheme,
        themes,
        getNextTheme
    };
};