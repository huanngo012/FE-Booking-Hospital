import { createTheme } from '@mui/material/styles'

const cssVar = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim()

const sizeButton = {
  small: '6px 12px',
  medium: '8px 16px',
  large: '12px 32px'
}

export const theme = createTheme({
  palette: {
    primary: {
      main: cssVar('--primary')
    },
    secondary: {
      main: cssVar('--blue-50')
    },
    tertiary: {
      main: cssVar('--blue-50')
    },
    background: {
      default: cssVar('--bg')
    },
    text: {
      primary: '#313535'
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: 'Roboto',
        variantMapping: {
          label1: 'p',
          label2: 'p',
          label3: 'p',
          body3: 'p',
          button1: 'p',
          button2: 'p',
          caption1: 'p',
          caption2: 'p'
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        size: 'medium'
      },
      styleOverrides: {
        sizeLarge: {
          padding: sizeButton.large,
          fontSize: '20px'
        },
        sizeMedium: {
          padding: sizeButton.medium,
          fontSize: '16px'
        },
        sizeSmall: {
          padding: sizeButton.small,
          fontSize: '12px'
        },

        root: ({ ownerState }) => ({
          borderRadius: 6,
          textTransform: 'none',
          fontWeight: 500,
          boxShadow: 'none',

          '&.Mui-disabled': {
            background: 'var(--grey-100)',
            color: 'var(--text-disable)'
          },
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              color: 'var(--white) ',
              background: 'linear-gradient(83.63deg,#00b5f1 33.34%,#00e0ff 113.91%)',
              '&:active': {
                backgroundColor: 'var(--white)',
                boxShadow: 'none'
              }
            }),
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'secondary' && {
              backgroundColor: 'var(--white)',
              '&:hover': {
                backgroundColor: 'var(--blue-50)',
                boxShadow: 'none'
              },
              '&:active': {
                boxShadow: 'none',
                backgroundColor: 'var(--turquoise-50)'
              }
            }),
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'tertiary' && {
              color: 'var(--text-primary) ',
              backgroundColor: 'var(--blue-50)',
              '&:hover': {
                backgroundColor: 'var(--grey-100)',
                boxShadow: 'none'
              },
              '&:active': {
                color: 'var(--white) ',
                backgroundColor: 'var(--primary)'
              }
            }),

          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'primary' && {
              color: 'var(--primary)',
              borderWidth: 1,
              borderColor: 'var(--primary)',
              '&:hover': {
                background: 'linear-gradient(83.63deg,#00b5f1 33.34%,#00e0ff 113.91%)',
                color: 'var(--white)'
              },
              '&:active': {
                background: 'linear-gradient(83.63deg,#00b5f1 33.34%,#00e0ff 113.91%)',
                color: 'var(--white)'
              }
            }),
          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'secondary' && {
              color: 'var(--primary)',
              backgroundColor: 'var(--white)',
              borderWidth: 1,
              borderColor: 'var(--border-color)',
              '&:hover': {
                borderColor: 'var(--primary)',
                backgroundColor: 'var(--white)'
              },
              '&:active': {
                color: 'var(--primary)',
                backgroundColor: 'var(--turquoise-50)',
                borderColor: 'var(--primary)'
              }
            }),
          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'tertiary' && {
              color: 'var(--text-primary)',
              borderWidth: 1,
              borderColor: 'transparent',

              '&:hover': {
                backgroundColor: 'var(--blue-50)'
              },
              '&:active': {
                color: 'var(--primary)',
                borderWidth: 1,
                borderColor: 'transparent'
              }
            }),

          ...(ownerState.variant === 'text' &&
            ownerState.color === 'primary' && {
              color: '#003553',

              '&:hover': {
                textDecoration: 'none',
                color: 'var(--primary)'
              },
              '&:active': {
                color: 'var(--text-primary)'
              }
            })
        })
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
          color: 'var(--grey-300)',
          '& .MuiButtonBase-root': {
            color: 'var(--grey-300)'
          },

          '&.Mui-checked, &.MuiCheckbox-indeterminate': {
            color: 'var(--primary)'
          },
          '&.Mui-disabled': {
            color: 'var(--grey-300)'
          }
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: 'var(--grey-300)',

          '&.Mui-checked, &.MuiCheckbox-indeterminate': {
            color: 'var(--primary)'
          },
          '&.Mui-disabled': {
            color: 'var(--grey-300)'
          }
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 44,
          height: 24,
          padding: 0,
          display: 'flex',

          '& .MuiSwitch-switchBase': {
            top: '-7px',
            left: '-7px',
            '&.Mui-checked': {
              transform: 'translateX(20px)',

              color: 'var(--white)',
              '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: 'var(--primary)'
              }
            }
          },
          '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 20,
            height: 20,
            borderRadius: 10
          },
          '& .MuiSwitch-track': {
            borderRadius: 24 / 2,
            opacity: 1,
            backgroundColor: 'var(--text-disable)',
            boxSizing: 'border-box'
          }
        }
      }
    },
    MuiSelect: {
      defaultProps: {
        fullWidth: true
      },
      styleOverrides: {
        root: () => ({
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--border-color)'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--grey-300)'
          },

          '&.MuiInputBase-root': {
            height: '40px',
            borderRadius: '6px'
          }
        })
      }
    },
    // MuiDataGrid: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: cssVar('--white'),
    //       border: 'none',
    //       '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
    //         outline: 'none !important',
    //       },

    //       '& .MuiDataGrid-row': {
    //         '&.Mui-selected': {
    //           // backgroundColor: "yellow",
    //         },
    //         '&.Mui-selected:hover': {
    //           // backgroundColor: "red",
    //         },
    //       },
    //     },
    //   },
    // },

    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        InputLabelProps: {
          shrink: false
        }
      },

      styleOverrides: {
        root: () => ({
          '& .MuiFormHelperText-root': {
            marginLeft: 0,
            marginTop: '6px',
            '&.Mui-error': {
              color: 'var(--alert)'
            }
          },
          '& .MuiInputLabel-root': {
            position: 'static',
            color: 'var(--text-primary)',
            transform: 'none',
            fontWeight: '600',
            fontSize: '14px',
            marginBottom: '8px',
            '&.Mui-focused ': {
              color: 'var(--text-primary)'
            },
            '&.Mui-error ': {
              color: 'var(--text-primary)'
            },
            '&.Mui-disabled ': {
              color: 'var(--text-tertiary)'
            }
          },
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'white',
            borderRadius: '6px',
            '& input': {
              color: 'var(--text-primary)',
              '&::placeholder': {
                color: 'var(--text-secondary)',
                fontSize: 16,
                height: '24px'
              },
              overflow: 'hidden',
              fontSize: 16,
              padding: '8px 16px',
              height: '24px'
            },
            '& fieldset': {
              border: '1px solid',
              borderColor: 'var(--border-color)'
            },

            //hover
            '&:hover fieldset': {
              borderColor: 'var(--grey-300)'
            },
            //focus
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--primary)',
              borderWidth: '1px'
            },

            '&.Mui-error fieldset': {
              borderColor: 'var(--alert) '
            },
            '&.Mui-disabled fieldset': {
              borderColor: 'var(--grey-200)',
              color: 'var(--text-disable)'
            }
          },
          '& .MuiInputBase-root.Mui-disabled': {
            backgroundColor: 'var(--grey-100)',
            color: 'var(--text-disable)'
          }
        })
      }
    },

    MuiTab: {
      styleOverrides: {
        root: () => ({
          textTransform: 'none',
          color: 'var(--secondary)'
        })
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: () => ({
          padding: 0
        })
      }
    },

    MuiAlert: {
      styleOverrides: {
        root: () => ({
          border: '1px solid',
          borderRadius: '8px',

          '&.MuiAlert-root': {
            width: 'fit-content',
            backgroundColor: 'var(--grey-900)',
            padding: '24px',
            '& .MuiAlert-icon': {
              padding: '0 16px 0 0',
              margin: 0
            },
            '& .MuiAlert-action': {
              color: 'var(--white)'
            },
            '& .MuiAlert-message': {
              padding: 0,
              color: 'var(--white)',
              '& .MuiAlertTitle-root': {
                marginBottom: '8px'
              }
            }
          }
        })
      }
    },

    MuiMenu: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: '100px',
          '& .MuiPaper-root': {
            marginTop: '5px',
            padding: '12px',
            backgroundColor: 'var(--white)',
            borderRadius: '8px',
            borderColor: 'var(--border-color)',
            boxShadow: '0px 2px 16px 0px rgba(8, 53, 53, 0.12)'
          },
          '& .MuiList-root': {
            padding: '0px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          },
          '& .MuiButtonBase-root': {
            borderRadius: '6px',
            padding: '0 12px'
          }
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          '&:hover': {
            backgroundColor: 'var(--blue-50)'
          },
          '&.Mui-selected': {
            backgroundColor: 'var(--blue-50)',
            '&.Mui-focusVisible': {
              color: 'var(--primary)',
              backgroundColor: 'var(--blue-50)'
            },

            '&:hover': {
              backgroundColor: 'var(--blue-50)'
            }
          }
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          '&:hover': {
            backgroundColor: 'var(--blue-50)'
          },

          '&.Mui-selected': {
            backgroundColor: 'var(--blue-50)',
            '&.Mui-focusVisible': {
              color: 'var(--primary)',
              backgroundColor: 'var(--blue-50)'
            },

            '&:hover': {
              backgroundColor: 'var(--blue-50)'
            }
          }
        }
      }
    }
  },
  typography: {
    fontFamily: ['Roboto'].join(','),
    button1: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: '28px'
    },
    button2: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: '24px'
    },
    button3: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '20px'
    },
    h1: {
      fontSize: 56,
      lineHeight: '72px',
      fontWeight: 700
    },
    h2: {
      fontSize: 48,
      lineHeight: '56px',
      fontWeight: 700
    },
    h3: {
      fontSize: 40,
      lineHeight: '48px',
      fontWeight: 700
    },
    h4: {
      fontSize: 32,
      lineHeight: '40px',
      fontWeight: 600
    },
    h5: {
      fontSize: 24,
      lineHeight: '32px',
      fontWeight: 600
    },
    h6: {
      fontSize: 20,
      lineHeight: '24px',
      fontWeight: 600
    },

    label1: {
      fontSize: 18,
      lineHeight: '28px',
      fontWeight: 600
    },
    label2: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 600
    },
    label3: {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 600
    },
    label4: {
      fontSize: 12,
      lineHeight: '18px',
      fontWeight: 600
    },
    body1: {
      fontSize: 18,
      lineHeight: '28px',
      fontWeight: 400
    },
    body2: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 400
    },
    body3: {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 400
    },
    caption1: {
      fontSize: 12,
      lineHeight: '18px',
      fontWeight: 400
    },
    caption2: {
      fontSize: 10,
      lineHeight: '16px',
      fontWeight: 400
    }
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 700,
      desktop: 1200,
      oversize: 1600
    }
  }
})
