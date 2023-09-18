import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivXBlackLogoIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivXBlackLogoIcon',
  component: DerivProductDerivXBlackLogoIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivXBlackLogoIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivXBlackLogoIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
