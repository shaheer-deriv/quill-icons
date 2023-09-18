import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivXBlackLogoWordmarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivXBlackLogoWordmarkIcon',
  component: DerivProductDerivXBlackLogoWordmarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivXBlackLogoWordmarkIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivXBlackLogoWordmarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
