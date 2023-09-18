import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivGoUltimateBrandLightWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivGoUltimateBrandLightWordmarkVerticalIcon',
  component: DerivProductDerivGoUltimateBrandLightWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivGoUltimateBrandLightWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivGoUltimateBrandLightWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
