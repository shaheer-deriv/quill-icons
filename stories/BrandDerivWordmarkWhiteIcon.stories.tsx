import type { Meta, StoryObj } from '@storybook/react';

import { BrandDerivWordmarkWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/BrandDerivWordmarkWhiteIcon',
  component: BrandDerivWordmarkWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BrandDerivWordmarkWhiteIcon>;

export default meta;

type Story = StoryObj<typeof BrandDerivWordmarkWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
