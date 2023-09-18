import type { Meta, StoryObj } from '@storybook/react';

import { BrandDerivLogoWhiteSlateIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/BrandDerivLogoWhiteSlateIcon',
  component: BrandDerivLogoWhiteSlateIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BrandDerivLogoWhiteSlateIcon>;

export default meta;

type Story = StoryObj<typeof BrandDerivLogoWhiteSlateIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
