import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivCtraderWhiteLogoWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivCtraderWhiteLogoWordmarkHorizontalIcon',
  component: PartnersProductDerivCtraderWhiteLogoWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivCtraderWhiteLogoWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivCtraderWhiteLogoWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
