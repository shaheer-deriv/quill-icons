import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivEzBrandDarkLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivEzBrandDarkLogoHorizontalIcon',
  component: DerivProductDerivEzBrandDarkLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivEzBrandDarkLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivEzBrandDarkLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
