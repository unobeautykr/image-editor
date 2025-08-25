import {
  Menu as MuiMenu,
  MenuItem,
  ListItemText,
  IconButton,
  Divider,
  Box as MuiBox,
  styled,
  listClasses,
  dividerClasses,
  menuItemClasses,
} from '@mui/material';

export const Menu = styled(MuiMenu)(
  () => `

  .${listClasses.root} {
    padding:0;
  }
`
);

export const Box = styled(MuiBox)(
  ({ theme }) => `
  &.boilerplate-header {
    display: flex;
    justify-content: space-between;
    padding: 12px 13px;
    font-weight: 700;
    font-size: 15px;
    line-height: 100%;
    letter-spacing: 0%;
    align-items: center;
    border-bottom: 1px solid ${theme.palette.divider};
  }

  .${dividerClasses.root} {
    margin: 0;
  }

  .${menuItemClasses.root} {
    padding: 17px 20px;

    &:hover {
      background-color: #F9FBFF;
    }
  }

`
);
