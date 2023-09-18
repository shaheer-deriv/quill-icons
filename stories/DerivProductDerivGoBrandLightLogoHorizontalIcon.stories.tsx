import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivGoBrandLightLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivGoBrandLightLogoHorizontalIcon',
  component: DerivProductDerivGoBrandLightLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivGoBrandLightLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivGoBrandLightLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
