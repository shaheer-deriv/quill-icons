import type { Meta, StoryObj } from '@storybook/react';

import { BrandDerivLogoCoralIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/BrandDerivLogoCoralIcon',
  component: BrandDerivLogoCoralIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BrandDerivLogoCoralIcon>;

export default meta;

type Story = StoryObj<typeof BrandDerivLogoCoralIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
