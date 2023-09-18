import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductSmarttraderBlackWordmarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductSmarttraderBlackWordmarkIcon',
  component: PartnersProductSmarttraderBlackWordmarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductSmarttraderBlackWordmarkIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductSmarttraderBlackWordmarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
