import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivCareersBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivCareersBrandDarkIcon',
  component: SubBrandDerivCareersBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivCareersBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivCareersBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
