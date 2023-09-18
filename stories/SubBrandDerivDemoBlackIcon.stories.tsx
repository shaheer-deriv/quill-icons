import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivDemoBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivDemoBlackIcon',
  component: SubBrandDerivDemoBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivDemoBlackIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivDemoBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
