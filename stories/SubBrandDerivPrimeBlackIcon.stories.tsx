import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivPrimeBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivPrimeBlackIcon',
  component: SubBrandDerivPrimeBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivPrimeBlackIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivPrimeBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
