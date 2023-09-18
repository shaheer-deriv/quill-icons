import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivAcademyBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivAcademyBrandDarkIcon',
  component: SubBrandDerivAcademyBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivAcademyBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivAcademyBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
