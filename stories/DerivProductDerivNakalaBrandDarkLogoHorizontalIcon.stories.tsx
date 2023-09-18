import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivNakalaBrandDarkLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivNakalaBrandDarkLogoHorizontalIcon',
  component: DerivProductDerivNakalaBrandDarkLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivNakalaBrandDarkLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivNakalaBrandDarkLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
