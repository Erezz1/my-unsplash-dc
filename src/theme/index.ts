export type Theme = 'success'
  | 'danger'
  | 'ghost'
  | 'info'
  | 'gray'
  ;

export const theme = {
  color: (color: Theme) => {
    const colors: Record<Theme, string> = {
      success: '#3DB46D',
      danger: '#EB5757',
      ghost: '#FFFFFF',
      info: '#4F4F4F',
      gray: '#CCCCCC',
    }
    return colors[color];
  },

  transitionDuration: '200ms'
}
