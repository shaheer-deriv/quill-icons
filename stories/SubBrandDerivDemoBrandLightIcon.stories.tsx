import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivDemoBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivDemoBrandLightIcon',
  component: SubBrandDerivDemoBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivDemoBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivDemoBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
