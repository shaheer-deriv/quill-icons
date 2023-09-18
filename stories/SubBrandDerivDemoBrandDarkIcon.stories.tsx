import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivDemoBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivDemoBrandDarkIcon',
  component: SubBrandDerivDemoBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivDemoBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivDemoBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
