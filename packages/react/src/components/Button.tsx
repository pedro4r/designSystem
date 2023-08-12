import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
    all: 'unset',
    borderRadius: '$sm',
    fontSize: '$sm',
    fontWeight: '$medium',
    fontFamily: '$default',
    textAlign: 'center',
    minWidth: 120,
    boxSizing: 'border-box',
    padding: '0 $4',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',

    cursor: 'pointer',

    svg: {
        width: '$4',
        height: '$4',
    },

    '&:disabled': {
        cursor: 'not-allowed',
    },

    '&:focus': {
        boxShadow: '0 0 0 2px $colors$gray100',
    },

    variants: {
        variant: {
            primary: {
                color: '$white',
                background: '$jupiter500',

                '&:not(:disabled):hover': {
                    background: '$jupiter300',
                },

                '&:disabled': {
                    backgroundColor: '$gray200',
                },

                '&:focus': {
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                },
            },

            secondary: {
                color: '$jupiter300',
                border: '2px solid $jupiter500',

                '&:focus': {
                    border: '2px solid $jupiter300',
                    outline: 'none',
                    boxShadow: 'none',
                },

                '&:not(disabled):hover': {
                    background: '$jupiter500',
                    color: '$white',
                },

                '&:disabled': {
                    color: '$gray200',
                    borderColor: '$gray200',
                },
            },

            tertiary: {
                color: '$gray100',

                '&:not(disabled):hover': {
                    color: '$white',
                },

                '&:disabled': {
                    color: '$gray600',
                },
            },

            danger: {
                color: '$white',
                background: '$red200',

                '&:not(:disabled):hover': {
                    background: '$red100',
                },

                '&:disabled': {
                    backgroundColor: '$gray200',
                },

                '&:focus': {
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                },
            },
        },

        size: {
            sm: {
                height: 38,
            },
            md: {
                height: 46,
            },
        },
    },

    defaultVariants: {
        variant: 'primary',
        size: 'md',
    },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
    as?: ElementType
}

Button.displayName = 'Button'
