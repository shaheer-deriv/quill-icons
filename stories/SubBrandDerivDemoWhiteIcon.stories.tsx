import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivDemoWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivDemoWhiteIcon',
  component: SubBrandDerivDemoWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivDemoWhiteIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivDemoWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
