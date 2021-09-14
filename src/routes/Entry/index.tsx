import React from 'react';
import { memo } from 'react';
import { Layout } from '../Layout';

export const Entry = memo(() => {
  return (
    <Layout />
  );
});

Entry.displayName = 'Entry';
