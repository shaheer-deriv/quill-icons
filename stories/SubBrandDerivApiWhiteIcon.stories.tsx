import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivApiWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivApiWhiteIcon',
  component: SubBrandDerivApiWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivApiWhiteIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivApiWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
