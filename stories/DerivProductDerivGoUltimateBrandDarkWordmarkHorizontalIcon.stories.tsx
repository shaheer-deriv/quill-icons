import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivGoUltimateBrandDarkWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivGoUltimateBrandDarkWordmarkHorizontalIcon',
  component: DerivProductDerivGoUltimateBrandDarkWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivGoUltimateBrandDarkWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivGoUltimateBrandDarkWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
