import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivGoUltimateBrandDarkWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivGoUltimateBrandDarkWordmarkVerticalIcon',
  component: DerivProductDerivGoUltimateBrandDarkWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivGoUltimateBrandDarkWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivGoUltimateBrandDarkWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
