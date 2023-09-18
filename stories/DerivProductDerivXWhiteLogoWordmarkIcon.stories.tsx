import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivXWhiteLogoWordmarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivXWhiteLogoWordmarkIcon',
  component: DerivProductDerivXWhiteLogoWordmarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivXWhiteLogoWordmarkIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivXWhiteLogoWordmarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
