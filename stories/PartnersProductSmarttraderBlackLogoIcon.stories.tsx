import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductSmarttraderBlackLogoIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductSmarttraderBlackLogoIcon',
  component: PartnersProductSmarttraderBlackLogoIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductSmarttraderBlackLogoIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductSmarttraderBlackLogoIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
