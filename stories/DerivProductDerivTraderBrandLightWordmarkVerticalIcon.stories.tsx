import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivTraderBrandLightWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivTraderBrandLightWordmarkVerticalIcon',
  component: DerivProductDerivTraderBrandLightWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivTraderBrandLightWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivTraderBrandLightWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
