import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivMt5WhiteLogoWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivMt5WhiteLogoWordmarkVerticalIcon',
  component: PartnersProductDerivMt5WhiteLogoWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivMt5WhiteLogoWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivMt5WhiteLogoWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
