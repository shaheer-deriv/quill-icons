import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivEzBrandLightLogoWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivEzBrandLightLogoWordmarkHorizontalIcon',
  component: DerivProductDerivEzBrandLightLogoWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivEzBrandLightLogoWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivEzBrandLightLogoWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
