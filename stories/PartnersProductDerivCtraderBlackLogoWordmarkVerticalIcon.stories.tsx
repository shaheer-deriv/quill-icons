import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivCtraderBlackLogoWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivCtraderBlackLogoWordmarkVerticalIcon',
  component: PartnersProductDerivCtraderBlackLogoWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivCtraderBlackLogoWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivCtraderBlackLogoWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
