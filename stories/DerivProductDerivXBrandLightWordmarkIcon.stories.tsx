import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivXBrandLightWordmarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivXBrandLightWordmarkIcon',
  component: DerivProductDerivXBrandLightWordmarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivXBrandLightWordmarkIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivXBrandLightWordmarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
