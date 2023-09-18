import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivPrimeWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivPrimeWhiteIcon',
  component: SubBrandDerivPrimeWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivPrimeWhiteIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivPrimeWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
