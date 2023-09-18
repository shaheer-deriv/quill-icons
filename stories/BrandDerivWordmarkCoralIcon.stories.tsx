import type { Meta, StoryObj } from '@storybook/react';

import { BrandDerivWordmarkCoralIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/BrandDerivWordmarkCoralIcon',
  component: BrandDerivWordmarkCoralIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BrandDerivWordmarkCoralIcon>;

export default meta;

type Story = StoryObj<typeof BrandDerivWordmarkCoralIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
