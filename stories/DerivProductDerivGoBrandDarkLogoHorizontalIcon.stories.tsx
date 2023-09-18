import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivGoBrandDarkLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivGoBrandDarkLogoHorizontalIcon',
  component: DerivProductDerivGoBrandDarkLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivGoBrandDarkLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivGoBrandDarkLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
