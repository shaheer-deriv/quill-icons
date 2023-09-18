import type { Meta, StoryObj } from '@storybook/react';

import { BrandDerivLogoWhiteCoralIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/BrandDerivLogoWhiteCoralIcon',
  component: BrandDerivLogoWhiteCoralIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BrandDerivLogoWhiteCoralIcon>;

export default meta;

type Story = StoryObj<typeof BrandDerivLogoWhiteCoralIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
