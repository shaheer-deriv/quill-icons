import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductSmarttraderBlackLogoWordmarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductSmarttraderBlackLogoWordmarkIcon',
  component: PartnersProductSmarttraderBlackLogoWordmarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductSmarttraderBlackLogoWordmarkIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductSmarttraderBlackLogoWordmarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
