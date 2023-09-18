import type { Meta, StoryObj } from '@storybook/react';

import { BrandDerivWordmarkSlateIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/BrandDerivWordmarkSlateIcon',
  component: BrandDerivWordmarkSlateIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BrandDerivWordmarkSlateIcon>;

export default meta;

type Story = StoryObj<typeof BrandDerivWordmarkSlateIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
