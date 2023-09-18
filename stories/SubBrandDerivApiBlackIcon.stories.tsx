import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivApiBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivApiBlackIcon',
  component: SubBrandDerivApiBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivApiBlackIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivApiBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
