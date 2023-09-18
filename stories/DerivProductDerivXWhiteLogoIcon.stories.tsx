import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivXWhiteLogoIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivXWhiteLogoIcon',
  component: DerivProductDerivXWhiteLogoIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivXWhiteLogoIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivXWhiteLogoIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
