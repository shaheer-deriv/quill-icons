import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivCareersBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivCareersBrandLightIcon',
  component: SubBrandDerivCareersBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivCareersBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivCareersBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
