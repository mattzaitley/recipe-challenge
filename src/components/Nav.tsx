import React from 'react';
import { Route } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Breadcrumbs, Typography } from '@material-ui/core';

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

interface NavProps {
  currentPathLabel: string;
}

export const Nav: React.SFC<NavProps> = ({ currentPathLabel }) => {
  return (
    <Route>
      {({ location }) => {
        const pathnames = location.pathname.split('/').filter(Boolean);
        return (
          <Breadcrumbs aria-label="breadcrumb">
            <LinkRouter color="inherit" to="/">
              Home
            </LinkRouter>
            {pathnames.map((value, index) => {
              const isLast = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              return isLast ? (
                <Typography color="textPrimary" key={to}>
                  {currentPathLabel}
                </Typography>
              ) : (
                <LinkRouter color="inherit" to={to} key={to}>
                  {value}
                </LinkRouter>
              );
            })}
          </Breadcrumbs>
        );
      }}
    </Route>
  );
};
