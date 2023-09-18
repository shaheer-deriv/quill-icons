import type { Meta, StoryObj } from '@storybook/react';

import { BrandDerivLogoSlateIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/BrandDerivLogoSlateIcon',
  component: BrandDerivLogoSlateIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BrandDerivLogoSlateIcon>;

export default meta;

type Story = StoryObj<typeof BrandDerivLogoSlateIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
